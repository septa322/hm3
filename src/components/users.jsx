import React, { useState } from "react"
import api from "../api"

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
  }

  const renderPhrase = (number) => {
    switch (number) {
      case 0:
        return `Никто с тобой не тусанет сегодня`
      case 2:
        return `${number} человека тусанет с тобой сегодня`
      case 3:
        return `${number} человека тусанет с тобой сегодня`
      case 4:
        return `${number} человека тусанет с тобой сегодня`
      default:
        return `${number} человек тусанет с тобой сегодня`
    }
  }
  return (
    <>
      <span
        style={{ fontSize: 18 }}
        className={
          users.length === 0 ? "badge m-2 bg-danger" : "badge m-2 bg-primary"
        }
      >
        {renderPhrase(users.length)}
      </span>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>
                {user.qualities.map((quality) => {
                  let badgeQualityClass = "badge m-1 bg-" + quality.color
                  return (
                    <span key={quality._id} className={badgeQualityClass}>
                      {quality.name}
                    </span>
                  )
                })}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}/5</td>
              <td>
                <button
                  className="btn bg-danger text-white"
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Users
