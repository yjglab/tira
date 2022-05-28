export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "jk",
      },
      content: "게시글1 #리리 #루루",
      Images: [
        {
          src: "https://images.unsplash.com/photo-1653669486766-89a4f002ed5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          src: "https://images.unsplash.com/photo-1638913662252-70efce1e60a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          src: "https://images.unsplash.com/photo-1648737119359-510d4f551382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "tira_alphabot",
          },
          content: "소통해요^^",
        },
        {
          User: {
            nickname: "tira_betabot",
          },
          content: "퍼가요~^^",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};
const ADD_POST = "ADD_POST";

export const addPost = {
  type: ADD_POST,
};
const dummyPost = {
  id: 2,
  content: "더미포스트",
  User: {
    id: 1,
    nickname: "dummmm",
  },
  Images: [],
  Comments: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
