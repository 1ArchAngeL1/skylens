import {dirname} from "path";
import {fileURLToPath} from "url";
import {FlatCompat} from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});
for (let _ of compat.extends("next/core-web-vitals", "next/typescript")) {
}
export default [
    js.configs.recommended,
    {
        plugins: {
            "react-hooks": reactHooks,
        },
        rules: {
            "react-hooks/exhaustive-deps": "off",
        },
    },
];
