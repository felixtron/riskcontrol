'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell
} from 'recharts';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const behaviorData = [
  { name: 'Jan', users: 400, sessions: 240 },
  { name: 'Feb', users: 300, sessions: 139 },
  { name: 'Mar', users: 200, sessions: 980 },
  { name: 'Apr', users: 278, sessions: 390 },
  { name: 'May', users: 189, sessions: 480 },
  { name: 'Jun', users: 239, sessions: 380 },
  { name: 'Jul', users: 349, sessions: 430 },
];

const conversionData = [
    { name: 'Homepage', rate: 5.2 },
    { name: 'Services', rate: 7.8 },
    { name: 'Contact', rate: 15.3 },
    { name: 'Quote Form', rate: 25.1 },
]

const ctaPerformanceData = [
    { name: 'Hero CTA', clicks: 450 },
    { name: 'Services CTA', clicks: 320 },
    { name: 'Footer CTA', clicks: 150 },
]

const COLORS = ['#2E5266', '#FFB300', '#78849E', '#d0d6e4'];

export default function AnalyticsDashboard() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>User Behavior</CardTitle>
          <CardDescription>Users and sessions over the last 7 months.</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={behaviorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  borderColor: 'hsl(var(--border))',
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="hsl(var(--primary))" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="sessions" stroke="hsl(var(--accent))" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Conversion Rate by Page</CardTitle>
           <CardDescription>Percentage of users completing goal.</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={conversionData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={80} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  borderColor: 'hsl(var(--border))',
                }}
              />
              <Bar dataKey="rate" fill="hsl(var(--primary))" background={{ fill: 'hsl(var(--muted))' }} unit="%" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
       <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle>CTA Performance</CardTitle>
          <CardDescription>Click distribution among main calls to action.</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={ctaPerformanceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="clicks"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {ctaPerformanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  borderColor: 'hsl(var(--border))',
                }}
               />
               <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
