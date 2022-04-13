import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"></span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
    </div>
  );
}
