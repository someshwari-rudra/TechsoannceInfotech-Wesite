import { hireDevelopersConfig } from "@/config/hire-developers"
import { HireTechClient } from "./client"

// Generate static params for static export
export async function generateStaticParams() {
  return Object.keys(hireDevelopersConfig.content).map((tech) => ({
    tech,
  }))
}

export default async function HireTechPage({ params }: { params: Promise<{ tech: string }> }) {
  const resolvedParams = await params
  // Handle catch-all or single segment params depending on how the route is defined.
  // The route is [tech], so it's a single segment usually, but verify if it's [...tech].
  // The previous code checked for array: `Array.isArray(params.tech)`.
  // Standard [tech] is string. [[...tech]] is array.
  // Assuming [tech] is string based on folder structure.

  // Wait, previous code: `const techSlug = Array.isArray(params.tech) ? params.tech[0] : params.tech`
  // This implies params.tech *could* be an array? In a [tech] folder, it's a string. 
  // But if it was [...tech], it would be string[].
  // I will check if resolvedParams.tech is array or string.

  let techSlug = resolvedParams.tech
  if (Array.isArray(techSlug)) {
    techSlug = techSlug[0]
  }

  return <HireTechClient techSlug={techSlug} />
}

