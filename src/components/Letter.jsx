import { StyledSpan } from './style';

const Letter = ({letter, acceptedList}) => {
    
  return (
    <StyledSpan>{acceptedList.includes(letter) ? letter : "_"}</StyledSpan>
  )
}

export default Letter