# opendata_fukui

福井県に関連するオープンデータをまとめたリポジトリです。人口統計の自動更新機能とインタラクティブな可視化を提供しています。

本プロジェクトでは、さまざまな公式ソースからデータを収集し、扱いやすいCSV形式に加工した上で、情報を可視化するWebベースのデモを提供しています。

## データセットと可視化

### 人口データ

鯖江市と敦賀市の人口データは、GitHub Actionsによって毎日自動的に更新されます。

#### 鯖江市の人口 (Sabae City Population)
- **データセット:** [`sabae_population.csv`](sabae_population.csv)
- **デモアプリ:** [Population Dashboard](https://code4fukui.github.io/opendata_fukui/sabae_population.html)
- **ライブCSV:** [https://code4fukui.github.io/opendata_fukui/sabae_population.csv](https://code4fukui.github.io/opendata_fukui/sabae_population.csv)
- **ソース:** [鯖江市の現在の人口 – めがねのまちさばえ 鯖江市](https://www.city.sabae.fukui.jp/about_city/tokeijoho/sabae-jinko.html)

#### 敦賀市の人口 (Tsuruga City Population)
- **データセット:** [`tsuruga_population_statistics.csv`](tsuruga_population_statistics.csv)
- **デモアプリ:** [Population Trend](https://code4fukui.github.io/opendata_fukui/tsuruga_population.html)
- **ソース:** [敦賀市オープンデータ　敦賀市-Tsuruga City-](https://www.city.tsuruga.lg.jp/about_city/tokei_nenpo/opendata.html)

#### 鯖江市と敦賀市の人口比較 (Sabae & Tsuruga Population Comparison)
- **デモアプリ:** [Comparison Chart](https://code4fukui.github.io/opendata_fukui/population.html)

### 地域データ

#### 鯖江市のNPO活動 (Sabae City NPO Activities)
- **データセット:** [`sabae_npo_act.csv`](sabae_npo_act.csv)
- **ライブCSV:** [https://code4fukui.github.io/opendata_fukui/sabae_npo_act.csv](https://code4fukui.github.io/opendata_fukui/sabae_npo_act.csv)
- **ソース:** [さばえNPOサポートリンク集](http://www.sabae-npo.org/doyano/link/index.html)他

#### RENEW Pay
- **データセット (決済データ):** [`renewpay_payment_2022.csv`](renewpay_payment_2022.csv)
  - **ライブCSV:** [https://code4fukui.github.io/opendata_fukui/renewpay_payment_2022.csv](https://code4fukui.github.io/opendata_fukui/renewpay_payment_2022.csv)
- **データセット (観光調査連携データ):** [`renewpay_payment_linked_2022.csv`](renewpay_payment_linked_2022.csv)
  - **ライブCSV:** [https://code4fukui.github.io/opendata_fukui/renewpay_payment_linked_2022.csv](https://code4fukui.github.io/opendata_fukui/renewpay_payment_linked_2022.csv)
- **ソース:** [株式会社ふくいのデジタル](https://www.fukui-digital.co.jp/) & [ふくいドットコム 福井県観光データ分析システム FTAS](https://www.fuku-e.com/feature/detail_266.html)

## データの自動更新
このリポジトリでは、[GitHub Actionsのワークフロー](.github/workflows/scheduled-update.yml)を使用して人口データを最新の状態に保っています。この処理は毎日実行され、以下のステップで構成されています。
1.  **取得 (Fetch):** Denoスクリプトが、鯖江市と敦賀市の公式ウェブサイトから最新の人口データ（XLSまたはCSV形式）をダウンロードします。
2.  **処理 (Process):** 生データを解析・クレンジングし、標準化されたCSV形式に変換します。
3.  **コミット (Commit):** 更新されたCSVファイルをこのリポジトリにコミットします。

## ライセンス
本プロジェクトはMIT Licenseの下で公開されています。
