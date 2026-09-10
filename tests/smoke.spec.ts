import { test, expect } from "@playwright/test";

test("carrega o dashboard e exibe a navegação principal", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Dashboard", level: 1 })
  ).toBeVisible();

  await expect(
    page.getByRole("navigation", { name: "Navegação principal" })
  ).toBeVisible();

  await expect(page.getByRole("link", { name: "Produtos" })).toBeVisible();
});
