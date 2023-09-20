import React, { memo } from 'react';
import { Switch } from 'react-router-dom';
import PropsRoute from '../../shared/components/PropsRoute';
import Home from './home/Home';
import Blog from './blog/Blog';
import BlogPost from './blog/BlogPost';
import useLocationBlocker from '../../shared/functions/useLocationBlocker';

function Routing(props) {
	const { blogPosts, selectBlog, selectHome } = props;
	useLocationBlocker();
	return (
		<Switch>
			{blogPosts.map((post) => (
				<PropsRoute
					path={post.url}
					component={BlogPost}
					title={post.title}
					key={post.title}
					src={post.src}
					date={post.date}
					content={post.content}
					otherArticles={blogPosts.filter((blogPost) => blogPost.id !== post.id)}
				/>
			))}
			<PropsRoute
				exact
				path="/blog"
				component={Blog}
				selectBlog={selectBlog}
				blogPosts={blogPosts}
			/>
			<PropsRoute path="/" component={Home} selectHome={selectHome} />
		</Switch>
	);
}

export default memo(Routing);
