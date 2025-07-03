import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

export const Loading = () => {
  return (
    <p className="loading">
      {<FontAwesomeIcon icon={faArrowRotateRight} />}
    </p>
  )
}


export const Error = ({ error }) => {
  return (
    <p className="error">
      {error.error || error || 'Unknown error!'}
    </p>
  )
}