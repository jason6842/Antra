const COUNTER_API_URL = "http://localhost:3000/count"; // remember "http://"

const updateCountAPI = async (newCount) => {
    await fetch(COUNTER_API_URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ count: newCount })
    });
};