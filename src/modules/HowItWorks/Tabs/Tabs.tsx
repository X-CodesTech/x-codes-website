import { useState } from "react";
import TabsData from "./Tabs.json";
import styles from "./styles.module.scss";

const { tabs, tabContent, step } = styles;

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const processText = (textArray: any) => {
    return textArray.map((part: any, index: any) => {
      if (typeof part === "string") {
        return <span key={index}>{part}</span>;
      } else if (part.type === "link") {
        return (
          <a
            key={index}
            href={part.url}
            style={{ textDecoration: "underline" }}
          >
            {part.text}
          </a>
        );
      }
      return null;
    });
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        {TabsData.map((tab: any) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={selectedTab === tab.id ? "btn active" : "btn"}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {TabsData.map(
          (tab: any) =>
            selectedTab === tab.id && (
              <>
                <ul key={tab.id} className={tabContent}>
                  {tab.content.map((item: any) => (
                    <li key={item.id}>
                      <span className={step}>Step {item.id + 1}:</span>{" "}
                      {processText(item.text)}
                    </li>
                  ))}
                </ul>
                <p className="fs-6 fw-light mt-3 text-center">
                  <span className={step}>Note:</span> We don’t provide or Sell
                  any Subscriptions, Stream and Content. We are a Software
                  Development Company.
                </p>
              </>
            )
        )}
      </div>
    </div>
  );
};

export default Tabs;
