import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import colors from "tailwindcss/colors";
import { BarChart } from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
} from "recharts/";

const data = [
  { product: "Marguerita", amount: 40 },
  { product: "Mussarela", amount: 16 },
  { product: "Pepperoni", amount: 25 },
  { product: "Quatro Queijos", amount: 32 },
  { product: "Da Casa", amount: 20 },
];
export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />
            <Line
              type="linear"
              dataKey="revenue"
              strokeWidth={2}
              stroke={colors.violet["400"]}
            ></Line>
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
