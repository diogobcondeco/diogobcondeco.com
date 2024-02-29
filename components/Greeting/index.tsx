import React, { useEffect, useState } from "react";
import detectBrowserLanguage from "detect-browser-language";
import { motion } from "framer-motion";
import { greetings } from "./lang";

type GreetingItem = {
  lang: string;
  message: {
    EARLY_MORNING: string;
    MORNING: string;
    AFTERNOON: string;
    NIGHT: string;
  };
};

const Greeting: React.FC = () => {
  const [greeting, setGreeting] = useState<string>("Hello");
  const [showSecondGreeting, setShowSecondGreeting] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      defineCorrectMessage();
      setShowSecondGreeting(true);
    }, 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function isBetween(hour: number, first: number, second: number) {
    return hour >= first && hour < second;
  }

  function selectTime(salutation: GreetingItem, hour: number) {
    if (salutation === undefined || salutation === null) {
      return setGreeting("Hello");
    } else if (isBetween(hour, 5, 9)) {
      return setGreeting(salutation.message.EARLY_MORNING);
    } else if (isBetween(hour, 9, 12)) {
      return setGreeting(salutation.message.MORNING);
    } else if (isBetween(hour, 12, 19)) {
      return setGreeting(salutation.message.AFTERNOON);
    } else {
      return setGreeting(salutation.message.NIGHT);
    }
  }

  function defineCorrectMessage() {
    const localeLanguage: string = detectBrowserLanguage().toLowerCase();
    const nowDate: Date = new Date();
    const nowHour: number = nowDate.getHours();
    const selectedGreeting = greetings.find(
      (item) => localeLanguage.substring(0, 2) === item.lang.substring(0, 2),
    );

    if (selectedGreeting) {
      selectTime(selectedGreeting, nowHour);
    } else {
      setGreeting("Hello");
    }
  }

  return (
    <div className="text-2xl sm:text-4xl">
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: showSecondGreeting ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {greeting}
      </motion.span>
      <span>, Diogo here.</span>
    </div>
  );
};

export default Greeting;
