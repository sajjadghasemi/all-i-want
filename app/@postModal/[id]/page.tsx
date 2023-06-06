import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

const PostModal = dynamic(() => import("../../components/PostModal"), {
    loading: () => <p className="p-3">Loading...</p>,
});

export async function getPost(params) {
    const response = await fetch(
        `https://rickandmortyapi.com/api/character/${params}`
    );
    const post = await response.json();
    if (!response.ok) return undefined;
    return post;
}

export async function generateStaticParams() {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    const posts = await response.json();
    return posts.results.map((post) => ({
        id: post.id.toString(),
    }));
}

const page = async ({ params }) => {
    const post = await getPost(params.id);

    if (!post) return notFound();

    return <PostModal post={post} />;
};

export default page;
