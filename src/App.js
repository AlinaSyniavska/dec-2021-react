import {Routes, Route, Navigate} from "react-router-dom";

import {MainLayout} from './layouts';
import {AlbumsPage, CommentsPage, PageNotFound, PhotosPage, SinglePostPage, SingleUserPage, UsersPage} from "./pages";
import {PostsPage} from "./pages";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'users'}/>}/>
          <Route path={'users'} element={<UsersPage/>}>
              <Route path={':idUser'} element={<SingleUserPage/>}>
                  <Route path={'posts'} element={<PostsPage/>}/>
              </Route>
              <Route path={':idUser/albums'} element={<AlbumsPage/>}>
                  <Route path={':idAlbum/photos'} element={<PhotosPage/>}/>
              </Route>
          </Route>
          <Route path={'posts'} element={<PostsPage/>}>
              <Route path={':idPost'} element={<SinglePostPage/>}>
                  <Route path={'comments'} element={<CommentsPage/>}/>
              </Route>
          </Route>
          <Route path={'*'} element={<PageNotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;
