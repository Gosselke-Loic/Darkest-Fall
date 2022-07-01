class AlterEgo {
    protected readonly name: string = "AlterEgo";

    static async typeWriter(content: string, innerContent:any):Promise<void> {

        let i = 0;
        
        const wait = () => new Promise(r => setTimeout(r, 50));
        const write = () => innerContent.textContent = (content.substring(0, i + 1));
        
        while (i < content.length) {
            requestAnimationFrame(write); 
            await wait();
            i++;                           
        }
    }
}

export { AlterEgo };