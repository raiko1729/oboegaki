import yaml
import os
import json

tag_relationships = {} # タグ間の関連性を格納する辞書
all_unique_tags = set() # すべての一意なタグを収集

# Jekyllの_postsディレクトリを走査
for filename in os.listdir('_posts'):
    if filename.endswith(('.md', '.html')):
        filepath = os.path.join('_posts', filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            # フロントマターの解析
            if content.startswith('---'):
                front_matter_end = content.find('---', 3)
                if front_matter_end != -1:
                    front_matter_str = content[3:front_matter_end]
                    try:
                        front_matter = yaml.safe_load(front_matter_str)
                        if 'tags' in front_matter:
                            tags = front_matter['tags']
                            if isinstance(tags, str): # 単一タグの場合
                                tags = [tags]

                            # すべての一意なタグを収集
                            for tag in tags:
                                all_unique_tags.add(tag)

                            # 同じ記事内のタグ同士の関連性を記録
                            for i in range(len(tags)):
                                for j in range(i + 1, len(tags)):
                                    tag1 = tags[i]
                                    tag2 = tags[j]
                                    # タグ名を正規化（必要であれば、小文字化など）
                                    # tag1 = tag1.lower()
                                    # tag2 = tag2.lower()

                                    tag_relationships.setdefault(tag1, {})
                                    tag_relationships.setdefault(tag2, {})
                                    tag_relationships[tag1][tag2] = tag_relationships[tag1].get(tag2, 0) + 1
                                    tag_relationships[tag2][tag1] = tag_relationships[tag2].get(tag1, 0) + 1
                    except yaml.YAMLError as e:
                        print(f"Error parsing front matter in {filename}: {e}")

# ここから可視化ライブラリ用のデータ形式に変換
nodes = []
# タグのグループ化（例：出現頻度などに基づいて）
# ここでは単純に一意なタグをノードにする
for tag in sorted(list(all_unique_tags)): # ソートして一貫性を保つ
    nodes.append({"id": tag, "label": tag}) # labelはvis.jsで表示されるテキスト

links = []
# tag_relationshipsからエッジを生成
# 重複エッジを避けるために、source < target の条件を使う
processed_links = set() # 処理済みのリンクを追跡するためのセット

for source_tag, targets in tag_relationships.items():
    for target_tag, value in targets.items():
        # ソースとターゲットを正規化し、常に小さい方をsource_id、大きい方をtarget_idとする
        # これにより、(A, B)と(B, A)を同じリンクとして扱う
        if source_tag < target_tag:
            source_id = source_tag
            target_id = target_tag
        else:
            source_id = target_tag
            target_id = source_tag

        # すでに処理済みのリンクでなければ追加
        if (source_id, target_id) not in processed_links:
            links.append({"source": source_id, "target": target_id, "value": value})
            processed_links.add((source_id, target_id))

# 最終的なグラフデータ構造
graph_data = {
    "nodes": nodes,
    "links": links
}

# 結果をJSONで出力
# Jekyllが参照しやすいassetsディレクトリ内に配置することを推奨
# output_dir = os.path.join('_site', 'assets', 'json') # Jekyllのビルド後に出力する場合
output_dir = os.path.join('assets', 'json') # Jekyllのソースディレクトリに出力する場合
os.makedirs(output_dir, exist_ok=True) # ディレクトリがなければ作成

output_filepath = os.path.join(output_dir, 'tag_graph_data.json') # ファイル名を変更して区別しやすくする

with open(output_filepath, 'w', encoding='utf-8') as f:
    json.dump(graph_data, f, ensure_ascii=False, indent=2)

print(f"Graph data generated and saved to {output_filepath}")