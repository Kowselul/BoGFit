import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { 
      email, 
      orderNumber, 
      customerName, 
      items, 
      totalPrice, 
      deliveryAddress,
      deliveryMethod,
      paymentMethod 
    } = body

    // Create email content
    const emailContent = `
      Comandă confirmată #${orderNumber}
      
      Bună ${customerName},
      
      Mulțumim pentru comanda ta de la BoGFit!
      
      Detalii comandă:
      - Număr comandă: #${orderNumber}
      - Total: ${totalPrice.toFixed(2)} RON
      - Adresă livrare: ${deliveryAddress}
      - Metodă livrare: ${deliveryMethod === 'express' ? 'Express (1-2 zile)' : 'Standard (3-5 zile)'}
      - Metodă plată: ${paymentMethod === 'card' ? 'Card bancar' : 'Ramburs'}
      
      Produse comandate:
      ${items.map((item: any) => `- ${item.name} x${item.quantity} - ${(item.price * item.quantity).toFixed(2)} RON`).join('\n')}
      
      Vei primi un email de confirmare la ${email} în cel mai scurt timp.
      
      Cu respect,
      Echipa BoGFit
    `

    console.log('[v0] Order confirmation email prepared:', {
      to: email,
      orderNumber,
      totalPrice,
      itemCount: items.length
    })

    // In a real application, you would send the email here using a service like:
    // - SendGrid
    // - AWS SES
    // - Resend
    // - Nodemailer
    
    // For this school project, we just log the email content
    console.log('[v0] Email content:\n', emailContent)

    return NextResponse.json({ 
      success: true, 
      message: 'Confirmation email sent successfully',
      orderNumber 
    })
  } catch (error) {
    console.error('[v0] Error sending confirmation email:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send confirmation email' },
      { status: 500 }
    )
  }
}
