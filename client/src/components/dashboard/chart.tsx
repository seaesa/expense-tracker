"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/core/shadcn/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/core/shadcn/chart"
import { ObjectProps } from '@/logic/mergeLogic'

const chartConfig = {
  limit: {
    label: "limit this month",
    color: "hsl(var(--chart-1))",
  },
  buyed: {
    label: "buyed amount",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export default function Chart({ chartData }: { chartData: ObjectProps[] }) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className='min-h-28'>
            <BarChart data={chartData.length < 5 ? [...chartData, {}, {}, {}, {}] : chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value: any) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" className='mx-2' />}
              />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="limit" fill="var(--color-limit)" radius={4} />
              <Bar dataKey="buyed" fill="var(--color-buyed)" radius={4} />
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
            Showing total visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
    </>
  )
}
