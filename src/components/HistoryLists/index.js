import './index.css'

const HistoryLists = props => {
  const {userDetails, onDeleteHistoryFunc} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = userDetails

  const onDelete = () => {
    onDeleteHistoryFunc(id)
  }

  return (
    <li className="lists">
      <div className="time-cont">
        <p className="timeP">{timeAccessed}</p>

        <div className="history-icons-name">
          <div className="icon-container">
            <img src={logoUrl} className="logo-icon" alt="domain logo" />
          </div>
          <div className="main-content-container">
            <div className="name-domain-container">
              <p className="domainName">{title}</p>
              <p className="domains">{domainUrl}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="delete-icon">
        <button
          className="button"
          onClick={onDelete}
          type="button"
          testId="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-ico"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryLists
