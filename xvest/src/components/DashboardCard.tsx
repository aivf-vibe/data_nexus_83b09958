'use client';

import { Card, Text, Metric, Flex } from "@tremor/react";

interface DashboardCardProps {
  title: string;
  metric: string | number;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isUpward: boolean;
  };
}

const DashboardCard = ({ title, metric, icon, trend }: DashboardCardProps) => {
  return (
    <Card className="bg-gray-800/50 border-gray-700">
      <Flex>
        {icon && <div className="text-gray-400">{icon}</div>}
        <div>
          <Text className="text-gray-400">{title}</Text>
          <Metric className="text-white">{metric}</Metric>
          {trend && (
            <Text className={trend.isUpward ? "text-green-500" : "text-red-500"}>
              {trend.isUpward ? "↑" : "↓"} {Math.abs(trend.value)}%
            </Text>
          )}
        </div>
      </Flex>
    </Card>
  );
};

export default DashboardCard;