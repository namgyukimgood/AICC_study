import Practice01Comment from "./Practice01Comment";

const comments = [
  { id:1,
    author: "홍길동",
    text: "아싸 1빠",
    regdate: "2024-03-04T12:34:56Z",
  },
  { id:2,
    author: "이순신",
    text: "아싸 2빠",
    regdate: "2024-03-04T12:34:57Z",
  },
  { id:3,
    author: "강감찬",
    text: "아싸 3빠",
    regdate: "2024-03-04T12:35:56Z",
  },
];

function Quiz02CommentList(props) {
  return (
    <div>
      {comments.map((comment, index) => (
        <Practice01Comment
          key={comment.id}
          author={comment.author}
          text={comment.text}
          regdate={comment.regdate}
        />
      ))}
    </div>
  );
}

export default Quiz02CommentList;
