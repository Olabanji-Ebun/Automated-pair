import time
from playwright.sync_api import sync_playwright

def verify_homepage():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            page.set_viewport_size({"width": 1280, "height": 800})
            page.goto("http://localhost:5173")

            # Wait for animation
            time.sleep(2)
            page.screenshot(path="verification/homepage_hero.png")

            # Scroll down
            page.evaluate("window.scrollTo(0, 800)")
            time.sleep(2)
            page.screenshot(path="verification/homepage_services.png")

            # About page
            page.click("text=About")
            time.sleep(1)
            page.screenshot(path="verification/about_page.png")

            # Gallery
            page.click("text=Gallery")
            time.sleep(1)
            page.evaluate("window.scrollTo(0, 200)")
            time.sleep(1)
            page.screenshot(path="verification/gallery_page.png")

            # Contact
            page.click("text=Contact")
            time.sleep(1)
            page.screenshot(path="verification/contact_page.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_homepage()
