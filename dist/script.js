const url = 'https://api.jikan.moe/v4/anime?q=one piece&sfw';
const div = document.getElementById('div');
const list = document.createDocumentFragment();

async function fetchApi() {
    const api = await fetch(url);
    const { data } = await api.json();
    console.log(data);
    listData(data);
}

function listData(data) {
    data.map(function (e) {
        const text = `
        <div
                    class="max-w-sm md:h-72 sm:h-80 mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                    <a href="#">
                        <img
                            class="rounded-t-lg max-h-32 w-full object-fill"
                            src=${e.images.jpg.image_url}
                            alt=""
                        />
                    </a>
                    <div class="p-1 text-center">
                        <a href="#">
                            <h5
                                class="mb-2 text-xl  font-bold tracking-tight text-gray-900 dark:text-white"
                            >
                             ${e.title}
                            </h5>
                        </a>
                        <p
                            class="mb-3 font-normal text-gray-700 dark:text-gray-400"
                        >
                           ${e.source}
                        </p>
                        <p
                            class="mb-3 font-normal text-gray-700 dark:text-gray-400"
                        >
                           ${e.score}
                        </p>
                        <a
                            href=${e.url}
                            class=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            target="_blank">
                            Read more
                            <svg
                                aria-hidden="true"
                                class="w-4 h-4 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
       
      `;
        const item = document.createElement('div');
        item.innerHTML = text;
        list.appendChild(item);
    });

    div.appendChild(list);
}

fetchApi();
