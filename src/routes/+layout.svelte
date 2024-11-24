<script>import "../app.css";
import { SvelteToast } from '@zerodevx/svelte-toast';
import '$lib/style.css';
import '$lib/Poppins/Poppins-Regular.ttf';
import Navbar from '../components/Navbar.svelte';
import Footer from '../components/Footer.svelte';
let { children } = $props();

const options = {
    theme: 'dark',
    pausable: true,
    dismissable: true,
    duration: 7000,
    theme: {
        "--toastWidth": "20rem",
        "--toastColor": "black",
        "--toastBorder": "1px solid #0D493D",
        "--toastBorderRadius": "6px",
        "--toastBarBackground": "#F96B29",
        "--toastPadding": "0.5em",
    },
};</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap" rel="stylesheet" />
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
	</style>
</svelte:head>

<Navbar></Navbar>

<SvelteToast {options}></SvelteToast>

{@render children()}

<Footer></Footer>
