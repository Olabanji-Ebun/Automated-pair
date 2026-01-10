import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Base URL - assuming the dev server is running on 5173
        # I need to start the server first in another process, or I can try to use preview
        # But for this script I will assume the server is running on localhost:5173
        # Wait, I need to start the server.

        base_url = "http://localhost:4173"

        pages = [
            {"name": "home", "path": "/"},
            {"name": "about", "path": "/about"},
            {"name": "services", "path": "/services"},
            {"name": "gallery", "path": "/gallery"},
            {"name": "contact", "path": "/contact"},
        ]

        for pg in pages:
            print(f"Navigating to {pg['name']}...")
            try:
                await page.goto(f"{base_url}{pg['path']}", wait_until="networkidle")
                # Wait a bit for animations
                await page.wait_for_timeout(2000)
                await page.screenshot(path=f"screenshot_{pg['name']}.png", full_page=True)
                print(f"Captured {pg['name']}")
            except Exception as e:
                print(f"Error capturing {pg['name']}: {e}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
