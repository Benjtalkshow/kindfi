import { type NextRequest, NextResponse } from 'next/server'
import { InAppError } from '~/lib/passkey/errors'
import { getAuthenticationOptions } from '~/lib/passkey/passkey'

export async function POST(req: NextRequest) {
	try {
		const body = await req.json()
		const input = {
			identifier: body.identifier,
			origin: req.headers.get('origin') || body.origin || '',
			challenge: body.challenge,
		}
		const options = await getAuthenticationOptions(input)
		return NextResponse.json(options)
	} catch (error) {
		if (error instanceof InAppError) {
			return NextResponse.json({ error: error.message }, { status: 500 })
		}
		return NextResponse.json(
			{ error: 'Failed to generate authentication options' },
			{ status: 500 },
		)
	}
}
