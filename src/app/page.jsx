import MainHeader from "@/app/components/MainHeader"
import MainFeatures from "@/app/components/MainFeatures"
import MainPlansSection from "@/app/components/MainPlansSection"

const features = [
	{
		"title": "24/7 Uptime Guarantee",
		"description": "Reliable 99.9% uptime with redundant servers.",
	},
	{
		"title": "DDoS Protection",
		"description": "Advanced DDoS protection for server security.",
	},
	{
		"title": "Automatic Backups",
		"description": "Regular data backups for server restoration.",
	},
	{
		"title": "One-Click Mod Installation",
		"description": "Effortless mod installation with a vast library.",
	},
	{
		"title": "Custom Domain Support",
		"description": "Personalize your server with a custom domain.",
	},
	{
		"title": "Flexible Resource Scaling",
		"description": "Customize CPU, RAM, and storage resources.",
	},
	{
		"title": "Server Customization",
		"description": "Tailor game settings to your preferences.",
	},
	{
		"title": "Server Monitoring and Analytics",
		"description": "Real-time performance monitoring and player tracking.",
	},
	{
		"title": "24/7 Customer Support",
		"description": "Round-the-clock support via chat, email, and tickets.",
	},
	{
		"title": "Multiplayer Management",
		"description": "Easily manage player access and permissions.",
	},
	{
		"title": "Customizable Server Version",
		"description": "Choose your Minecraft version for compatibility.",
	},
	{
		"title": "Scheduled Tasks",
		"description": "Automate maintenance, backups, and restarts.",
	},
	{
		"title": "User-Friendly Control Panel",
		"description": "An intuitive control panel for easy server management.",
	},
	{
		"title": "Global Server Locations",
		"description": "Deploy in multiple regions for low-latency gameplay.",
	},
]

export default function Home() {
	return (
		<>
			<MainHeader />
			<MainFeatures features={features} />
			<MainPlansSection />
		</>
	)
}
