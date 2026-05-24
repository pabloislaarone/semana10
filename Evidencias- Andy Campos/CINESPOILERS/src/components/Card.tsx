import { useState } from 'react'

type CardProps = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardProps) => {
  const [likes, setLikes] = useState(0)

  const handleAddLike = () => setLikes(likes + 1)
  const handleRemoveLike = () => { if (likes > 0) setLikes(likes - 1) }
  const handleResetLikes = () => setLikes(0)

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Likes: {likes}</p>
      <div className="actions">
        <button className="button" onClick={handleAddLike}>+</button>
        <button className="button" onClick={handleRemoveLike}>-</button>
        <button className="button" onClick={handleResetLikes}>Reset</button>
      </div>
    </div>
  )
};

export default Card