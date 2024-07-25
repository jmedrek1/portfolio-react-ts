import CustomLink from './components/utils/CustomLink';

type ParsedText = (string | React.JSX.Element)[];
export type PhraseLink = { [key: string]: string };

export function parseText(text: string, phrasesToLink: PhraseLink): ParsedText {
  let result: ParsedText = [];
  let lastIndex = 0;

  Object.entries(phrasesToLink).forEach(([phrase, url]) => {
    const regex = new RegExp(`\\b${phrase}\\b`, 'gi');
    let match: RegExpExecArray | null;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        result.push(text.slice(lastIndex, match.index));
      }
      result.push(
        <CustomLink key={match.index} href={url}>
          {match[0]}
        </CustomLink>
      );
      lastIndex = regex.lastIndex;
    }
  });

  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }

  return result;
};