import { createContext, ReactNode, useState } from 'react';

type Episode = {
  title: string,
  members: string,
  thumbnail: string,
  duration: number,
  url: string,
}

type PlayerContextData = {
  episodeList: Episode[],
  currentEpisodeIndex: number,
  isPlaying: boolean,
  play: (episode: Episode) => void,
  setPlayingState: (state: boolean) => void,
  togglePlay: () => void,
}

export const playerContext = createContext({} as PlayerContextData);

type PlayerContextProvideProps = {
  children: ReactNode;
}

export function PlayerContextProvider({ children }: PlayerContextProvideProps) {
  const [episodeList, setEpsodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode: Episode) {
    setEpsodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  return (
    <playerContext.Provider
      value={{
        episodeList,
        currentEpisodeIndex,
        play,
        isPlaying,
        togglePlay,
        setPlayingState,
      }}
    >
      {children}
    </playerContext.Provider>
  )
}