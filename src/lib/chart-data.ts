// 포트폴리오용 차트 데이터 - 일본 매출 대시보드 기반

// 월별 매출 데이터 (2022.06 ~ 2026.01)
export const monthlyRevenueData = [
  { label: '2022-06', revenue: 8084648 },
  { label: '2022-07', revenue: 70894109 },
  { label: '2022-08', revenue: 116867608 },
  { label: '2022-09', revenue: 158819947 },
  { label: '2022-10', revenue: 145692976 },
  { label: '2022-11', revenue: 66690943 },
  { label: '2022-12', revenue: 119546735 },
  { label: '2023-01', revenue: 175020989 },
  { label: '2023-02', revenue: 203396622 },
  { label: '2023-03', revenue: 244737515 },
  { label: '2023-04', revenue: 223493129 },
  { label: '2023-05', revenue: 395747000 },
  { label: '2023-06', revenue: 456654000 },
  { label: '2023-07', revenue: 603872500 },
  { label: '2023-08', revenue: 708614500 },
  { label: '2023-09', revenue: 717552000 },
  { label: '2023-10', revenue: 691113500 },
  { label: '2023-11', revenue: 648791000 },
  { label: '2023-12', revenue: 797676000 },
  { label: '2024-01', revenue: 1177836000 },
  { label: '2024-02', revenue: 1049543000 },
  { label: '2024-03', revenue: 1193093000 },
  { label: '2024-04', revenue: 1049992000 },
  { label: '2024-05', revenue: 1026747000 },
  { label: '2024-06', revenue: 1038494500 },
  { label: '2024-07', revenue: 1095099500 },
  { label: '2024-08', revenue: 1097009000 },
  { label: '2024-09', revenue: 1072825500 },
  { label: '2024-10', revenue: 1104098500 },
  { label: '2024-11', revenue: 1097497500 },
  { label: '2024-12', revenue: 1200063500 },
  { label: '2025-01', revenue: 1264774500 },
  { label: '2025-02', revenue: 1133456000 },
  { label: '2025-03', revenue: 1028397000 },
  { label: '2025-04', revenue: 926285000 },
  { label: '2025-05', revenue: 879571500 },
  { label: '2025-06', revenue: 839052500 },
  { label: '2025-07', revenue: 815268000 },
  { label: '2025-08', revenue: 829018500 },
  { label: '2025-09', revenue: 899415000 },
  { label: '2025-10', revenue: 745926500 },
  { label: '2025-11', revenue: 776638500 },
  { label: '2025-12', revenue: 809627500 },
  { label: '2026-01', revenue: 768762500 },
].map((d, i, arr) => {
  const firstRevenue = arr[0].revenue
  const lastRevenue = arr[arr.length - 1].revenue
  // 첫 값을 Index 1, 마지막 값을 Index 10으로 변환
  const index = i === 0 ? 1 : i === arr.length - 1 ? 10 : 1 + ((d.revenue - firstRevenue) / (lastRevenue - firstRevenue)) * 9
  return {
    ...d,
    shortLabel: `${d.label.slice(2, 4)}.${d.label.slice(5)}`,
    revenue_억: Math.round(d.revenue / 1e8),
    revenue_index: +(index.toFixed(2)),
  }
})

// 연도별 매출 데이터
export const yearlyRevenueData = [
  { year: 2022, revenue: 686596966 },
  { year: 2023, revenue: 5866668755 },
  { year: 2024, revenue: 13202299000 },
  { year: 2025, revenue: 11180871500 },
].map((d, i, arr) => {
  const firstRevenue = arr[0].revenue
  const lastRevenue = arr[arr.length - 1].revenue
  // 첫 값을 Index 1, 마지막 값을 Index 10으로 변환
  const index = i === 0 ? 1 : i === arr.length - 1 ? 10 : 1 + ((d.revenue - firstRevenue) / (lastRevenue - firstRevenue)) * 9
  return {
    ...d,
    revenue_억: Math.round(d.revenue / 1e8),
    revenue_B: (d.revenue / 1e9).toFixed(1),
    revenue_index: +(index.toFixed(2)),
  }
})

// 첫결율 데이터 (2023-03 ~ 2026-01)
export const firstPaymentRateData = [
  { label: '2023-03', rate: 0.0751 },
  { label: '2023-04', rate: 0.0765 },
  { label: '2023-05', rate: 0.0701 },
  { label: '2023-06', rate: 0.0654 },
  { label: '2023-07', rate: 0.0644 },
  { label: '2023-08', rate: 0.0650 },
  { label: '2023-09', rate: 0.0614 },
  { label: '2023-10', rate: 0.0579 },
  { label: '2023-11', rate: 0.0597 },
  { label: '2023-12', rate: 0.0576 },
  { label: '2024-01', rate: 0.0599 },
  { label: '2024-02', rate: 0.0546 },
  { label: '2024-03', rate: 0.0565 },
  { label: '2024-04', rate: 0.0571 },
  { label: '2024-05', rate: 0.0562 },
  { label: '2024-06', rate: 0.0525 },
  { label: '2024-07', rate: 0.0501 },
  { label: '2024-08', rate: 0.0456 },
  { label: '2024-09', rate: 0.0411 },
  { label: '2024-10', rate: 0.0365 },
  { label: '2024-11', rate: 0.0390 },
  { label: '2024-12', rate: 0.0515 },
  { label: '2025-01', rate: 0.0570 },
  { label: '2025-02', rate: 0.0531 },
  { label: '2025-03', rate: 0.0528 },
  { label: '2025-04', rate: 0.0567 },
  { label: '2025-05', rate: 0.0564 },
  { label: '2025-06', rate: 0.0627 },
  { label: '2025-07', rate: 0.0522 },
  { label: '2025-08', rate: 0.0387 },
  { label: '2025-09', rate: 0.0726 },
  { label: '2025-10', rate: 0.0590 },
  { label: '2025-11', rate: 0.0521 },
  { label: '2025-12', rate: 0.0669 },
  { label: '2026-01', rate: 0.0916 },
].map((d) => ({
  ...d,
  shortLabel: `${d.label.slice(2, 4)}.${d.label.slice(5)}`,
  rate_pct: +(d.rate * 100).toFixed(2),
}))

// 포맷팅 함수
export const formatRevenue = (value: number) => {
  if (value >= 1e9) return `${(value / 1e9).toFixed(1)}B`
  if (value >= 1e8) return `${(value / 1e8).toFixed(0)}억`
  if (value >= 1e7) return `${(value / 1e7).toFixed(1)}천만`
  if (value >= 1e6) return `${(value / 1e6).toFixed(1)}M`
  if (value >= 1e4) return `${(value / 1e4).toFixed(0)}만`
  return value?.toLocaleString() ?? value
}

export const formatYen = (value: number) => `¥${formatRevenue(value)}`
export const formatPercent = (value: number) => `${value.toFixed(2)}%`
