import CustomLink from './components/utils/CustomLink';
import { ParsedText, PhraseLink, Match } from 'types';

// Will be linked to globally
const PHRASES: PhraseLink = {
  // About
  "The Hartford": "https://thehartford.com",
  "University of Connecticut": "https://cse.uconn.edu",
  "Academy of Aerospace and Engineering": "https://aaen.crecschools.org/",
  // Projects
  "Bushnell Performing Arts Center": "https://bushnell.org/",
  "Digital Experience Group": "https://dxgroup.core.uconn.edu/",
  "DXG": "https://dxgroup.core.uconn.edu/",
  "CFNI calculator": "https://uconnruddcenter.org/cfni/",
  "Grant Trails": "https://granttrails.uconn.edu/",
  "greenhouse inventory website": "http://florawww.eeb.uconn.edu/index.html",
  "COR2E": "https://core.uconn.edu/",
  "CPS Lab": "https://cps.cse.uconn.edu/members/",
  "Cyber-Physical Systems Lab": "https://cps.cse.uconn.edu/members/",
  "VeRNet": "https://github.com/AmyangXYZ/VeRNet",
  "Jiachen Wang": "https://www.linkedin.com/in/jc-w",
  "stock picker": "https://github.com/jmedrek1/stock-picker",
  "clone of the Spotify platform": "https://spotify-clone-hazel-psi.vercel.app/"
}

export function parseText(text: string): ParsedText {
  const result: ParsedText = [];
  const matches: Match[] = [];

  // Find all matches for all phrases
  Object.entries(PHRASES).forEach(([phrase, url]) => {
    const regex = new RegExp(`\\b${phrase}\\b`, 'gi');
    let match: RegExpExecArray | null;
    while ((match = regex.exec(text)) !== null) {
      matches.push({
        index: match.index,
        end: match.index + match[0].length, // TODO: fix TS error
        phrase: match[0],
        url
      });
    }
  });

  // Sort matches by their starting index
  matches.sort((a, b) => a.index - b.index);

  let lastIndex = 0;
  matches.forEach((match) => {
    if (match.index > lastIndex) {
      result.push(text.slice(lastIndex, match.index));
    }
    result.push(
      <CustomLink key={match.index} href={match.url} to={match.url}>
        {match.phrase}
      </CustomLink>
    );
    lastIndex = match.end;
  });

  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }

  return result;
}