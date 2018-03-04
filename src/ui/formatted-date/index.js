import React from 'react'
import t from 'prop-types'

const FormattedDate = ({timestamp}) => {
  const date = new Date(timestamp)
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return <div>{`${day}/${month}/${year}`}</div>
}

FormattedDate.propTypes = {
  timestamp: t.number.isRequired
}

export default FormattedDate
