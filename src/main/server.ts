import app from '@/main/config/app';

async function main() {
    try {
        app.listen(3000, () => {
            console.log(`Server is running on port http://localhost:3000`);
        });
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

main()
    .catch(e => {
        throw e;
    });