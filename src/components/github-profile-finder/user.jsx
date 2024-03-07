export default function User({ user }) {
  const {
    created_at,
    name,
    login,
    avatar_url,
    followers,
    following,
    public_repos,
  } = user;

  const createdDate = new Date(created_at);
  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div>
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          User Joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleDateString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
      </div>
      <div>
        Public Repos
        {public_repos}
      </div>
      <div>followers: {followers}</div>
      <div>following : {following}</div>
    </div>
  );
}
