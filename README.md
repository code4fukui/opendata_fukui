# opendata_fukui

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A repository of open data related to Fukui Prefecture, Japan, featuring automatically updated population statistics and interactive visualizations.

This project collects data from various official sources, processes it into clean CSV format, and provides web-based demos to visualize the information.

## Datasets and Visualizations

### Population Data

The population data for Sabae and Tsuruga is automatically updated daily via a GitHub Action.

#### 鯖江市の人口 (Sabae City Population)
- **Dataset:** [`sabae_population.csv`](sabae_population.csv)
- **Demo App:** [Population Dashboard](https://code4fukui.github.io/opendata_fukui/sabae_population.html)
- **Live CSV:** [https://code4fukui.github.io/opendata_fukui/sabae_population.csv](https://code4fukui.github.io/opendata_fukui/sabae_population.csv)
- **Source:** [鯖江市の現在の人口 – めがねのまちさばえ 鯖江市](https://www.city.sabae.fukui.jp/about_city/tokeijoho/sabae-jinko.html)

#### 敦賀市の人口 (Tsuruga City Population)
- **Dataset:** [`tsuruga_population_statistics.csv`](tsuruga_population_statistics.csv)
- **Demo App:** [Population Trend](https://code4fukui.github.io/opendata_fukui/tsuruga_population.html)
- **Source:** [敦賀市オープンデータ　敦賀市-Tsuruga City-](https://www.city.tsuruga.lg.jp/about_city/tokei_nenpo/opendata.html)

#### 鯖江市と敦賀市の人口 (Sabae & Tsuruga Population Comparison)
- **Demo App:** [Comparison Chart](https://code4fukui.github.io/opendata_fukui/population.html)

### Regional Data

#### 鯖江市のNPO活動 (Sabae City NPO Activities)
- **Dataset:** [`sabae_npo_act.csv`](sabae_npo_act.csv)
- **Live CSV:** [https://code4fukui.github.io/opendata_fukui/sabae_npo_act.csv](https://code4fukui.github.io/opendata_fukui/sabae_npo_act.csv)
- **Source:** [さばえNPOサポートリンク集](http://www.sabae-npo.org/doyano/link/index.html)他

#### RENEW Pay
- **Dataset (Payments):** [`renewpay_payment_2022.csv`](renewpay_payment_2022.csv)
  - **Live CSV:** [https://code4fukui.github.io/opendata_fukui/renewpay_payment_2022.csv](https://code4fukui.github.io/opendata_fukui/renewpay_payment_2022.csv)
- **Dataset (Linked with Tourism Survey):** [`renewpay_payment_linked_2022.csv`](renewpay_payment_linked_2022.csv)
  - **Live CSV:** [https://code4fukui.github.io/opendata_fukui/renewpay_payment_linked_2022.csv](https://code4fukui.github.io/opendata_fukui/renewpay_payment_linked_2022.csv)
- **Source:** [株式会社ふくいのデジタル](https://www.fukui-digital.co.jp/) & [ふくいドットコム 福井県観光データ分析システム FTAS](https://www.fuku-e.com/feature/detail_266.html)

## Automatic Data Updates
This repository uses a [GitHub Actions workflow](.github/workflows/scheduled-update.yml) to keep population data current. The process runs daily and consists of the following steps:
1.  **Fetch:** Deno scripts download the latest population data (in XLS or CSV format) from the official websites for Sabae and Tsuruga.
2.  **Process:** The raw data is parsed, cleaned, and converted into a standardized CSV format.
3.  **Commit:** The updated CSV files are committed back to this repository.
