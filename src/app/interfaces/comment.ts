export interface BookCommentsProps {
  bookComments: CommentData[]
}

export interface CommentProps {
  userComment: CommentData;
}

export interface RenderCommentProps {
  item: CommentData;
}

export interface CommentData {
  id: string;
  user:  string;
  userImgUrl: string;
  comment: string;
}
