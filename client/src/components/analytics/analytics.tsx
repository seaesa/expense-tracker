'use client';

import { TrendingUp } from 'lucide-react';
import { LabelList, Pie, PieChart } from 'recharts';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/core/shadcn/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/core/shadcn/chart';
import { useEffect, useState } from 'react';
import { getData } from '@/services/axios';
import { convertObjectToArray } from '@/logic/mergeLogic';
import { formatString } from '@/shared/formatString';
// const chartData = [
//   { browser: "chrome", visitor: 1000, fill: "var(--color-chrome)" },
//   { browser: "safari", visitor: 200, fill: "var(--color-safari)" },
//   { browser: "firefox", visitor: 187, fill: "var(--color-firefox)" },
//   { browser: "edge", visitor: 173, fill: "var(--color-edge)" },
//   { browser: "other", visitor: 90, fill: "var(--color-other)" },
// ]

// const chartConfig = {
//   visitors: {
//     label: "Visitors",
//   },
//   chrome: {
//     label: "Chrome",
//     color: "hsl(var(--chart-1))",
//   },
//   safari: {
//     label: "Safari",
//     color: "hsl(var(--chart-2))",
//   },
//   firefox: {
//     label: "Firefox",
//     color: "hsl(var(--chart-3))",
//   },
//   edge: {
//     label: "Edge",
//     color: "hsl(var(--chart-4))",
//   },
//   other: {
//     label: "Other",
//     color: "hsl(var(--chart-5))",
//   },

// } satisfies ChartConfig

export function Component() {
	const [chartData, setChartData] = useState([]);
	const [chartConfig, setChartConfig] = useState({});

	useEffect(() => {
		(async () => {
			const data = await getData('/expenses');
			const dataInThisMonth = data.filter(
				(data) => new Date(data.date).toLocaleDateString() === new Date().toLocaleDateString()
			);
			const formatData = dataInThisMonth.reduce((prev: any, curr: any) => {
				const category = formatString(curr.category.name);
				prev[category] = {
					amount: curr.amount + (prev[category]?.visitors || 0),
					category: category,
					fill: `var(--color-${category})`,
				};
				return prev;
			}, {});
			setChartConfig(() => {
				return Object.keys(formatData).reduce((obj: any, keys, index) => {
					obj[keys] = {
						label: keys as any,
						color: `hsl(var(--chart-${index + 1}))`,
					};
					return obj;
				}, {});
			});
			setChartData(convertObjectToArray(formatData) as any);
		})();
	}, []);

	return (
		<Card className='flex flex-col'>
			<CardHeader className='items-center pb-0'>
				<CardTitle>Pie Chart - Label</CardTitle>
				<CardDescription>January - June 2024</CardDescription>
			</CardHeader>
			<CardContent className='flex-1 pb-0'>
				<ChartContainer
					config={chartConfig}
					className='mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground'
				>
					<PieChart>
						<ChartTooltip content={<ChartTooltipContent hideLabel />} />
						<Pie data={chartData} dataKey='amount' label nameKey='category'>
							<LabelList
								dataKey='category'
								className='fill-background'
								stroke='none'
								fontSize={14}
								formatter={(value: keyof typeof chartConfig) => (chartConfig[value] as any)?.label}
							/>
						</Pie>
					</PieChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className='flex-col gap-2 text-sm'>
				<div className='flex items-center gap-2 font-medium leading-none'>
					Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
				</div>
				<div className='leading-none text-muted-foreground'>
					Showing total visitors for the last 6 months
				</div>
			</CardFooter>
		</Card>
	);
}
