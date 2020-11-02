import React from "react";

type SVGType = {
  name: "like" | "comment" | "search" | "notification" | "user";
};

export default function SVG({ name }: SVGType) {
  switch (name) {
    case "like":
      return (
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <polygon points="0 0 24 0 24 24 0 24" />
            <path
              d="M16.5,4.5 C14.8905,4.5 13.00825,6.32463215 12,7.5 C10.99175,6.32463215 9.1095,4.5 7.5,4.5 C4.651,4.5 3,6.72217984 3,9.55040872 C3,12.6834696 6,16 12,19.5 C18,16 21,12.75 21,9.75 C21,6.92177112 19.349,4.5 16.5,4.5 Z"
              fill="#000000"
              fillRule="nonzero"
            />
          </g>
        </svg>
      );
    case "comment":
      return (
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <rect x="0" y="0" width="24" height="24" />
            <path
              opacity="0.3"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.4862 18L12.7975 21.0566C12.5304 21.54 11.922 21.7153 11.4386 21.4483C11.2977 21.3704 11.1777 21.2597 11.0887 21.1255L9.01653 18H5C3.34315 18 2 16.6569 2 15V6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H14.4862Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H6C5.44772 9 5 8.55228 5 8C5 7.44772 5.44772 7 6 7ZM6 11H11C11.5523 11 12 11.4477 12 12C12 12.5523 11.5523 13 11 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11Z"
              fill="black"
            />
          </g>
        </svg>
      );
    case "search":
      return (
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <rect x="0" y="0" width="24" height="24" />
            <path
              d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
              fill="#000000"
              fillRule="nonzero"
              opacity="0.3"
            />
            <path
              d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
              fill="#000000"
              fillRule="nonzero"
            />
          </g>
        </svg>
      );
    case "notification":
      return (
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path
              d="M17,12 L18.5,12 C19.3284271,12 20,12.6715729 20,13.5 C20,14.3284271 19.3284271,15 18.5,15 L5.5,15 C4.67157288,15 4,14.3284271 4,13.5 C4,12.6715729 4.67157288,12 5.5,12 L7,12 L7.5582739,6.97553494 C7.80974924,4.71225688 9.72279394,3 12,3 C14.2772061,3 16.1902508,4.71225688 16.4417261,6.97553494 L17,12 Z"
              fill="#000000"
            />
            <rect
              fill="#000000"
              opacity="0.3"
              x="10"
              y="16"
              width="4"
              height="4"
              rx="2"
            />
          </g>
        </svg>
      );
    case "user":
      return (
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <polygon points="0 0 24 0 24 24 0 24" />
            <path
              d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
              fill="#000000"
              fillRule="nonzero"
              opacity="0.3"
            />
            <path
              d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
              fill="#000000"
              fillRule="nonzero"
            />
          </g>
        </svg>
      );

    default:
      return <svg />;
  }
}
