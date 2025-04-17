
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const predictionData = [
  {
    issue: "114095",
    predicted: [3, 6, 23, 24, 37, 1, 9, 13, 33, 35],
    winning: [3, 6, 23, 24, 37],
    hit: 5,
    tag: "命中70%以上",
  },
  {
    issue: "114094",
    predicted: [7, 22, 25, 29, 38, 2, 14, 18, 33, 36],
    winning: [7, 22, 25, 29, 38],
    hit: 5,
    tag: "命中70%以上",
  },
  {
    issue: "114093",
    predicted: [2, 3, 16, 27, 39, 8, 12, 14, 21, 36],
    winning: [2, 3, 16, 27, 39],
    hit: 5,
    tag: "命中70%以上",
  },
];

export default function Home() {
  const [todayPrediction, setTodayPrediction] = useState<number[]>([]);

  useEffect(() => {
    setTodayPrediction(predictionData[0].predicted);
  }, []);

  return (
    <main className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">🎯 今彩539 AI 預測系統</h1>

      <Card className="mb-6 bg-yellow-50 border-yellow-300">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">🔥 今日預測號碼</h2>
          <div className="flex flex-wrap gap-2">
            {todayPrediction.map((num) => (
              <Badge key={num} className="text-lg p-2 rounded-full">
                {num}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-4">📈 歷史命中紀錄（部分示意）</h2>
          <div className="space-y-3">
            {predictionData.map((entry) => (
              <div
                key={entry.issue}
                className="border rounded-xl p-3 flex flex-col bg-white shadow"
              >
                <div className="font-semibold">期號：{entry.issue}</div>
                <div className="text-sm">預測：{entry.predicted.join(", ")}</div>
                <div className="text-sm">中獎：{entry.winning.join(", ")}</div>
                <div>
                  命中數：{entry.hit} / 5
                  <Badge
                    className={`ml-2 ${
                      entry.tag === "命中70%以上"
                        ? "bg-green-500"
                        : entry.tag === "疑似人為控制"
                        ? "bg-red-500"
                        : "bg-gray-400"
                    }`}
                  >
                    {entry.tag}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
