import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import About from "../views/About.vue";
import Projects from "../views/Projects.vue";
import MyThoughts from "../views/MyThoughts.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
		},
		{
			path: "/contact",
			name: "Contact",
			component: Contact,
		},
		{
			path: "/about",
			name: "About",
			component: About,
		},
		{
			path: "/projects",
			name: "Projects",
			component: Projects,
		},
		{
			path: "/thoughts",
			name: "Thoughts",
			component: MyThoughts,
		},
	],
});

export default router;
