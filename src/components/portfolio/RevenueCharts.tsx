'use client'

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import { monthlyRevenueData, yearlyRevenueData, firstPaymentRateData, formatYen, formatPercent } from '@/lib/chart-data'

const CHART_COLORS = {
  primary: '#e07c3c', // 포트폴리오 accent color
  secondary: '#2563EB',
  accent: '#10B981',
  grid: '#262626', // stone-800에 가까운 색상
  text: '#71717A', // stone-500
  textLight: '#E4E4E7', // stone-100
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-lg border border-stone-700 bg-stone-900 p-3 text-xs shadow-lg">
      <p className="mb-2 font-semibold text-stone-300">{label}</p>
      {payload.map((entry: any, index: number) => (
        <p key={index} style={{ color: entry.color }} className="font-medium">
          {entry.name}: <span className="font-bold">{entry.value}</span>
        </p>
      ))}
    </div>
  )
}

export function MonthlyRevenueChart() {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={monthlyRevenueData} margin={{ top: 10, right: 10, bottom: 30, left: 10 }}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={CHART_COLORS.primary} stopOpacity={0.4} />
              <stop offset="100%" stopColor={CHART_COLORS.primary} stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
          <XAxis
            dataKey="shortLabel"
            tick={{ fill: CHART_COLORS.text, fontSize: 10 }}
            angle={-45}
            textAnchor="end"
            height={60}
            interval="preserveStartEnd"
          />
          <YAxis
            tick={{ fill: CHART_COLORS.text, fontSize: 9 }}
            tickFormatter={(v) => `${v}억`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="revenue_억"
            name="월 매출(억)"
            stroke={CHART_COLORS.primary}
            fill="url(#revenueGradient)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 5, fill: CHART_COLORS.primary }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export function YearlyRevenueChart() {
  const yearColors = [CHART_COLORS.secondary, CHART_COLORS.primary, CHART_COLORS.accent, '#c96828'] // accent-dark

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={yearlyRevenueData} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
          <XAxis
            dataKey="year"
            tick={{ fill: CHART_COLORS.textLight, fontSize: 12, fontWeight: 600 }}
          />
          <YAxis
            tick={{ fill: CHART_COLORS.text, fontSize: 9 }}
            tickFormatter={(v) => `${(v / 1e9).toFixed(0)}B`}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null
              const d = payload[0].payload
              return (
                <div className="rounded-lg border border-stone-700 bg-stone-900 p-3 text-xs shadow-lg">
                  <p className="mb-2 font-bold text-stone-100">{d.year}년</p>
                  <p style={{ color: CHART_COLORS.primary }} className="font-medium">
                    매출: <span className="font-bold">¥{(d.revenue / 1e8).toFixed(0)}억</span>
                  </p>
                </div>
              )
            }}
          />
          <Bar dataKey="revenue" name="연 매출" radius={[6, 6, 0, 0]}>
            {yearlyRevenueData.map((_, i) => (
              <Cell key={i} fill={yearColors[i]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export function FirstPaymentRateChart() {
  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={firstPaymentRateData} margin={{ top: 10, right: 10, bottom: 30, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} />
          <XAxis
            dataKey="shortLabel"
            tick={{ fill: CHART_COLORS.text, fontSize: 9 }}
            angle={-45}
            textAnchor="end"
            height={60}
            interval="preserveStartEnd"
          />
          <YAxis
            tick={{ fill: CHART_COLORS.text, fontSize: 9 }}
            tickFormatter={(v) => `${v}%`}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (!active || !payload?.length) return null
              const d = payload[0].payload
              return (
                <div className="rounded-lg border border-stone-700 bg-stone-900 p-3 text-xs shadow-lg">
                  <p className="mb-2 font-semibold text-stone-300">{d.label}</p>
                  <p style={{ color: CHART_COLORS.accent }} className="font-medium">
                    첫결율: <span className="font-bold">{d.rate_pct}%</span>
                  </p>
                </div>
              )
            }}
          />
          <Line
            type="monotone"
            dataKey="rate_pct"
            name="첫결율(%)"
            stroke={CHART_COLORS.accent}
            strokeWidth={2.5}
            dot={{ r: 3, fill: CHART_COLORS.accent }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
