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
  data: { name: string; value: number }[];
}

const WordCloud: FC<wordCloudProps> = (props) => {
  const { maskImage, data } = props;
  const wordCloudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    if (wordCloudRef.current) {
      const chart = echarts.init(wordCloudRef.current);
      const mul = document.body.clientWidth / 375;
      const option = {
        series: [
          {
            type: "wordCloud",
            shape: "triangle",
            maskImages: maskImage,
            drawOutOfBound: false,
            left: "center",
            top: "center",
            width: "90%",
            height: "90%",
            sizeRange: [20 * mul, 30 * mul],
            textStyle: {
              normal: {
                // fontFamily: "Semester Summary Content",
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
              ...data,
              ...data,
              ...data,
              ...data,
              ...data,
              ...data,
              ...data,
              ...data,
              ...data,
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
