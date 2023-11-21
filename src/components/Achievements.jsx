import React, { useState, useEffect } from 'react';

const Achievements = () => {
  const [sentences, setSentences] = useState([
    { number: 1, text: 'In the vast landscape of technological innovation, Team Innoreva etched its mark as a rising star. Earning a place of honor among the top 20 teams across Pan-India in the prestigious TATA Grand Indian IOT Innovation Challenge of 2018.' },
    { number: 2, text: 'In 2019, Team Innoreva proudly reached the finals of the Smart India Hackathon. The astute problem-solving and ingenious thinking of our team members set us apart from others.' },
    { number: 3, text: "In the year 2019, Team Innoreva achieved a significant milestone by publishing two IEEE conference papers focused on IoT. These contributions demonstrated our team's dedication to advancing the field's knowledge and impact in the domain of IoT." },
    { number: 4, text: "The year 2020 witnessed remarkable triumph of Team Innoreva's members at NIT Jamshedpur's SIH 2020 internal hackathon. Four out of seven positions were claimed by participants from our team. Through their skills and innovative thinking, they secured 1st and 2nd spots in both the software and hardware categories." },
    { number: 5, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus euismod quis viverra nibh.' },
    { number: 6, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus euismod quis viverra nibh.' },
    { number: 7, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus euismod quis viverra nibh.' },
  ]);

  const [displayedSentences, setDisplayedSentences] = useState(sentences.slice(0, 4));

  useEffect(() => {
    // Fetch and sort sentences from the JSON array based on the 'number' field
    const sortedSentences = sentences.slice(4).sort((a, b) => a.number - b.number);
    setSentences([...sentences.slice(0, 4), ...sortedSentences]);
  }, []);

  const handleRightButtonClick = () => {
    setDisplayedSentences(sentences.slice(4));
  };

  const handleLeftButtonClick = () => {
    setDisplayedSentences(sentences.slice(0, 4));
  };

  return (
    <div className="container mx-auto my-12 text-center">
      {displayedSentences.map((sentence) => (
        <div key={sentence.number} className="w-fit p-3">
          <div className="mb-8 mt-6 flex items-start">
            <div className="number font-bold text-white text-7xl mr-8">{`${String(sentence.number).padStart(2, '0')}`}</div>
            <div className="w-full font-family-Archivo text-white text-lg md:text-xl lg:text-1xl leading-6 md:leading-5 lg:leading-7 text-justify relative">
              {`${sentence.text}`}
            </div>
          </div>
          <div className="w-full h-2px border-t border-b-0 border-x-0 border-white mt-2"></div>
        </div>
      ))}
      <div className="mt-12 flex justify-start space-x-4">
        <div className='font-family-Archivo ml-5 text-white'>
          <p>WE HAVE SOME MORE</p>
        </div>
        <div className="w-2/3 h-2px border-t border-b-0 border-x-0 border-white mt-2"></div>
        <button
          onClick={handleLeftButtonClick}
          className="text-white"
        >
          <img className='w-[30px]' src="./public/assets/left-arrow.svg" alt="" />
        </button>
        <button
          onClick={handleRightButtonClick}
          className="text-white"
        >
          <img className='w-[30px]' src="./public/assets/right-arrow.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Achievements;
