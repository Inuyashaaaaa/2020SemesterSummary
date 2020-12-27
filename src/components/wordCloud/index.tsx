/**
 * @author huro
 * @description 词云
 */

// @ts-nocheck

import React, { FC, useEffect, useRef } from "react";
import echarts from "echarts";
import "echarts-wordcloud";

export interface wordCloudProps {
  maskImage: string;
}

const WordCloud: FC<wordCloudProps> = (props) => {
  const { maskImage } = props;

  const wordCloudRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (wordCloudRef.current) {
      const chart = echarts.init(wordCloudRef.current);
      const mul = document.body.clientWidth / 375
      const option = {
        series: [
          {
            type: "wordCloud",
            shape: "triangle",
            maskImages: maskImage,
            drawOutOfBound: false,
            left: "center",
            top: "center",
            width: '90%',
            height: '90%',
            sizeRange: [10 * mul, 20 * mul],
            textStyle: {
              normal: {
                fontFamily: "Semester Summary Content",
                color: function () {
                  // return 'rgba(' + [
                  //   Math.round(Math.random() * 255),
                  //   Math.round(Math.random() * 255),
                  //   Math.round(Math.random() * 255),
                  //   0.6
                  // ].join(',') + ')';
                  return "rgb(255, 255, 255)";
                },
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: "#333",
              },
            },
            data: [
              {
                name: "操作系统",
                value: Math.random(),
              },
              {
                name: "C#程序设计",
                value: Math.random(),
              },
              {
                name: "移动应用开发",
                value: Math.random(),
              },
              {
                name: "计算机专业英语",
                value: Math.random(),
              },
              {
                name: "人工智能导论",
                value: Math.random(),
              },
              {
                name: "XML程序设计",
                value: Math.random(),
              },
              {
                name: "面向对象分析与设计",
                value: Math.random(),
              },
              {
                name: "数值计算",
                value: Math.random(),
              },
              {
                name: "操作系统",
                value: Math.random(),
              },
              {
                name: "C#程序设计",
                value: Math.random(),
              },
              {
                name: "移动应用开发",
                value: Math.random(),
              },
              {
                name: "计算机专业英语",
                value: Math.random(),
              },
              {
                name: "人工智能导论",
                value: Math.random(),
              },
              {
                name: "XML程序设计",
                value: Math.random(),
              },
              {
                name: "面向对象分析与设计",
                value: Math.random(),
              },
              {
                name: "数值计算",
                value: Math.random(),
              },
              {
                name: "操作系统",
                value: Math.random(),
              },
              {
                name: "C#程序设计",
                value: Math.random(),
              },
              {
                name: "移动应用开发",
                value: Math.random(),
              },
              {
                name: "计算机专业英语",
                value: Math.random(),
              },
              {
                name: "人工智能导论",
                value: Math.random(),
              },
              {
                name: "XML程序设计",
                value: Math.random(),
              },
              {
                name: "面向对象分析与设计",
                value: Math.random(),
              },
              {
                name: "数值计算",
                value: Math.random(),
              },
            ],
          },
        ],
      };
      const maskImg = new Image();
      maskImg.onload = () => {
        option.series[0].maskImage = maskImg;
        chart.setOption(option);
      };
      maskImg.src = maskImage;
      chart.setOption(option, []);
    }
  });
  return (
    <div
      ref={wordCloudRef}
      style={{
        width: "100vw",
        height: "100vw",
        position: "absolute",
        top: "30vw",
        left: "10vw",
      }}
    ></div>
  );
};

export default WordCloud;
