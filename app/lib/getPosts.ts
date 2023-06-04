export async function getPosts({ pageParam = 1 }) {
    const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${pageParam}`
    );
    const posts = await response.json();
    return posts;
}
