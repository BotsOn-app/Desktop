import { contextBridge, ipcRenderer } from "electron";
import { BotInterfaces } from './src/app/bots';

contextBridge.exposeInMainWorld("electron", {
    newBot: (options: BotInterfaces) => {
        ipcRenderer.send("new-bot", options)
    },
    getAllBot: () => {
        ipcRenderer.send("get-bots")
    },
    getBot: (id: string) => {
        ipcRenderer.send("get-bot", id)
    },
    deleteBot: (id: string) => {
        ipcRenderer.send("delete-bot", id)
    },
    addExtensionBot: (botId: string, extension: string) => {
        ipcRenderer.send("add-extension-bot", botId, extension)
    }
})

ipcRenderer.on("bots", (e, bots) => {
    console.log(bots)
})

ipcRenderer.on("get-bot", (e, bot) => {
    console.log(bot)
})

ipcRenderer.on("delete-bot", (e, bot) => {
    console.log(bot)
})

ipcRenderer.on("add-extension-bot", (e, bot) => {
    console.log(bot)
})

ipcRenderer.on("add-extension-bot", (e, bot) => {
    console.log(bot)
})