import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import PostService from "./PostService";
import AxiosAdapter from "../../adapters/AxiosAdapter";

export default function usePost() {

    const routes = useRouter();
    const postService = new PostService(new AxiosAdapter());
    const postsList = ref([]);
    const formPost = reactive({
        title: "",
        body: "",
    });
    const postToSchedule = ref([]);
    const postSelected = ref(null);
    const quantityPosts = ref(0);

    async function getAllPosts() {
        await postService.getPosts().then((res) => {
            postsList.value = res.data;
            quantityPosts.value = res.data.data.length;
        });
    }

    async function submitForm(formPost) {
        if (!formPost.title.length > 0 || !formPost.body.length > 0) {
            alert("Preencha todos os campos");
        } else {
            try {
                await postService.savePost(formPost).then((res) => {
                    formPost.title = "";
                    formPost.body = "";
                });
                await routes.push({ name: "home" });
            } catch (error) {
                alert("Erro ao salvar post " + error);
            }
        }
    }

    async function formSchedulePost(postID) {
        if (!postID) {
            alert("Escolha um post");
        } else {
            const postService = new PostService(new AxiosAdapter());
            await postService
                .schedulePost({ id: postID })
                .then(async (res) => {
                    alert("Post agendado com sucesso");
                    await routes.push({ name: "home" });
                })
                .catch((error) => {
                    alert("Erro ao agendar post " + error);
                });
        }
    }

    async function listPostSchedule() {
        await postService.getPostsToSchedule().then((res) => {
            postToSchedule.value = res.data;
        });
    }

    return {
        postsList,
        getAllPosts,
        submitForm,
        formPost,
        postToSchedule,
        postSelected,
        formSchedulePost,
        listPostSchedule,
        quantityPosts
    }
}
