import classes from "./Card.module.css";

const Card = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    login,
    name,
    public_repos,
    url,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div>
      <div className={classes.avatarContainer}>
        <img className={classes.avatar} src={avatar_url} alt="user" />
      </div>
      <div className={classes.info}>
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()} `}
        </p>
        <p>Public repo</p>
        <p>{public_repos}</p>
        <p>Followers</p>
        <p>{followers}</p>
        <p>Following</p>
        <p>{following}</p>
      </div>
    </div>
  );
};

export default Card;
