import Practice01Comment from "./Practice01Comment";

function Quiz01CommentList(props) {
  return (
    <div>
      <Practice01Comment
        author="홍길동"
        text="아싸 1빠"
        regdate="2024-03-04T12:34:56Z"
      />
      <Practice01Comment
        author="이순신"
        text="아싸 2빠"
        regdate="2024-03-04T12:34:57Z"
      />
      <Practice01Comment
        author="강감찬"
        text="아싸 3빠"
        regdate="2024-03-04T12:35:56Z"
      />
    </div>
  );
}

export default Quiz01CommentList;
